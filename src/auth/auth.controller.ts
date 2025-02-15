import { Controller, Post, UseGuards, Req, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Req() req: any) {
    if (!req.user) {
      throw new UnauthorizedException('Invalid credentials: User not found.');
    }
    try {
      return this.authService.login(req.user); 
    } catch (error) {
      throw new UnauthorizedException('Error during token generation.');
    }
  }
}
