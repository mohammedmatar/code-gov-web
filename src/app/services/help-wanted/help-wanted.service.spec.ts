import { async, getTestBed, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { HelpWantedService } from './help-wanted.service';
import { AgencyService } from '../agency';

describe('HelpWantedService', () => {
  
  let service: HelpWantedService;

  beforeEach(async(() => {
    
    TestBed.configureTestingModule({
      providers: [
        AgencyService,
        HelpWantedService
      ],
      imports: [HttpModule]
    });
    
    const testbed = getTestBed();
    service = testbed.get(HelpWantedService);    
    
  }));

  describe('tasks', () => {
    it('get tasks', (done) => {
      service.getTasks().subscribe((tasks) => {
        expect(tasks.length).toBeGreaterThanOrEqual(5);
        done();
      });
    });
  });

});
