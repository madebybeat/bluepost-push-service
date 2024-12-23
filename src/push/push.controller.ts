import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';

const crypto = require('crypto');
const ece = require('http_ece');

@Controller('push')
export class PushController {
  constructor() {}

  @Post('')
  async push(@Req() req: Request) {
    req.on('data', async (chunk: any) => {
      const subscription = { auth: '', publicKey: '', privateKey: '' };

      const receiver = crypto.createECDH('prime256v1');

      receiver.generateKeys();
      receiver.setPublicKey(Buffer.from(subscription.publicKey, 'base64'));
      receiver.setPrivateKey(Buffer.from(subscription.privateKey, 'base64'));

      const decrypted = ece.decrypt(chunk, {
        version: 'aes128gcm',
        authSecret: subscription.auth,
        privateKey: receiver
      });

      const message = JSON.parse(decrypted.toString('utf8'));

      console.log(message);
    });
  }
}
