import {
  Controller,
  Post,
  Get,
  UseInterceptors,
  UploadedFile,
  Res,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { join } from 'path';
import { Response } from 'express';
import { zip } from 'compressing';
@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('album')
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file) {
    console.log('file', file);

    return '上傳圖片';
  }

  @Get('export')
  downLoad(@Res() res: Response) {
    const url = join(__dirname, '../images/1736236037739.png');
    res.download(url);
    return '下載圖片';
  }

  @Get('stream')
  async down(@Res() res: Response) {
    const url = join(__dirname, '../images/1736236037739.png');

    const tar = new zip.Stream();
    await tar.addEntry(url);
    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader('Content-Disposition', 'attachment; filename=example.zip');
    tar.pipe(res);

    return '下載圖片';
  }
}
