import { Injectable } from '@angular/core';

import { compress, decompress } from 'lz-string';

@Injectable()
export class CompressionService {
  compressString(data: string): string {
    return compress(data);
  }
  compressObject(data: any): string {
    return compress(JSON.stringify(data));
  }

  decompressString(compressed: string): string {
    return decompress(compressed);
  }
  decompressObject(compressed: string): any {
    return JSON.parse(decompress(compressed));
  }
}
