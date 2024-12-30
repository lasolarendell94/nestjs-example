import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World from Github Actions v4 and from Azure App Service baby!!!!';
  }
}
