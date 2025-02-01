import { CreateUrlUseCase } from '@app/application/shortening/use-case/create-url';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUrlDto } from './dto/create-url.dto';
import { GetUrlUseCase } from '@app/application/shortening/use-case/get-url';
import { ApiTags } from '@nestjs/swagger';
import { CacheKey } from '@nestjs/cache-manager';
import { HttpCacheInterceptor } from '@app/infra/persistence/cache/interceptor/http-cache.interceptor';
import { GetOriginUrlUseCase } from '@app/application/shortening/use-case/get-origin-url';
import { Response } from 'express';

@Controller('/url')
@ApiTags('url')
export class UrlController {
  constructor(
    private createUrlUseCase: CreateUrlUseCase,
    private getUrlUseCase: GetUrlUseCase,
    private getOriginUrlUseCase: GetOriginUrlUseCase,
  ) {}

  @Get('')
  @CacheKey('urls')
  @UseInterceptors(HttpCacheInterceptor)
  getAll() {
    const response = this.getUrlUseCase.execute({});
    return response;
  }

  @Post('')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  create(@Body() createUrlDto: CreateUrlDto) {
    const response = this.createUrlUseCase.execute(createUrlDto);
    return response;
  }

  // @Get(':shortCode')
  // async getOriginalUrl(@Param('shortCode') shortCode: string) {
  //   const originalUrl = await this.getOriginUrlUseCase.execute({ shortCode });
  //   return { originalUrl };
  // }

  @Get(':shortCode')
  async getOriginalUrl(
    @Param('shortCode') shortCode: string,
    @Res() res: Response,
  ) {
    const originalUrl = await this.getOriginUrlUseCase.execute({ shortCode });

    if (!originalUrl) {
      return res.status(404).json({ message: 'URL not found' });
    }
    return res.redirect(originalUrl);
  }
}
