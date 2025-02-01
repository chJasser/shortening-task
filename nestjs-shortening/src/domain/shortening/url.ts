import { Entity } from '@app/core/entities/entity';

export interface UrlProps {
  id?: string;
  originalUrl: string;
  shortCode?: string;
}

export class Url extends Entity<UrlProps> {
  constructor(props: UrlProps) {
    super(props);
  }

  get id(): string {
    return this.props.id;
  }

  get originalUrl(): string {
    return this.props.originalUrl;
  }

  get shortCode(): string {
    return this.props.shortCode;
  }

  get currentState(): UrlProps {
    return this.props;
  }
}
