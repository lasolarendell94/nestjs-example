import { SetMetadata } from "@nestjs/common";

export const jwtConstants = {
    secret: 'fbh19ABOJF*s^1ksJS*&!@#',
};

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true); 