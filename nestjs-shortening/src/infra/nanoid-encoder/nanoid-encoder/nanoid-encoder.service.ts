import { EnvService } from '@app/infra/env';
import { Injectable } from '@nestjs/common';
import { customAlphabet } from 'nanoid';
import { createHash } from 'crypto';

@Injectable()
export class NanoidEncoderService {
  private nanoid: (size?: number) => string;

  constructor(private envService: EnvService) {
    const ALPHABET = this.envService.get('ALPHABET');
    this.nanoid = customAlphabet(ALPHABET, 6);
  }

  private hashUrl(url: string): string {
    const hash = createHash('sha256');
    hash.update(url);
    return hash.digest('hex').slice(0, 6);
  }

  generateShortCodeFromUrl(url: string): string {
    const hashedUrl = this.hashUrl(url);
    return this.nanoid() + hashedUrl;
  }
}
