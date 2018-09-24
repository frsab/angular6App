import { PubliciteModule } from './publicite.module';

describe('PubliciteModule', () => {
  let publiciteModule: PubliciteModule;

  beforeEach(() => {
    publiciteModule = new PubliciteModule();
  });

  it('should create an instance', () => {
    expect(publiciteModule).toBeTruthy();
  });
});
