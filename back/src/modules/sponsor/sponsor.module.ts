import { Module } from '@nestjs/common';
import { SponsorController } from './sponsor.controller';
import { SponsorService } from './sponsor.service';
import { SponsorRepository } from './sponsor.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sponsor } from 'src/entities/Sponsor';

@Module({
  imports: [TypeOrmModule.forFeature([Sponsor])],
  controllers: [SponsorController],
  providers: [SponsorService, SponsorRepository],
})
export class SponsorModule {}
