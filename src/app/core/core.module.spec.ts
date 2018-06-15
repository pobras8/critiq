import { AppModule } from '../app.module';
import { CoreModule } from './core.module';

describe('CoreModule', () => {
    let coreModule: CoreModule;

    beforeEach(() => {
        coreModule = new CoreModule(AppModule);
    });

    it('should create an instance', () => {
        expect(coreModule).toBeTruthy();
    });
});
