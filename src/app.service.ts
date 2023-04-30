import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World Again!';
  }

  getSomething(): string {
    return 'Something Else';
  }
}
