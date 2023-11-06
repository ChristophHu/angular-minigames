import { TestBed } from '@angular/core/testing'
import { SelectDropdownService } from './select-dropdown.service'

describe('SelectDropdownService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectDropdownService = TestBed.inject(SelectDropdownService);
    expect(service).toBeTruthy();
  });
  it('should emit open instance', () => {
    const service: SelectDropdownService = TestBed.inject(SelectDropdownService);
    spyOn(service.openDropdownInstance, 'emit');
    service.openDropdown('123');
    expect(service.openDropdownInstance.emit).toHaveBeenCalledWith('123');
  });

  it('should emit close instance', () => {
    const service: SelectDropdownService = TestBed.inject(SelectDropdownService);
    spyOn(service.closeDropdownInstance, 'emit');
    service.closeDropdown('123');
    expect(service.closeDropdownInstance.emit).toHaveBeenCalledWith('123');
  });

  it('should result is open', () => {
    const service: SelectDropdownService = TestBed.inject(SelectDropdownService);
    service.openInstances = ['123'];
    service.isOpen('123');
    expect(service.isOpen('123')).toBeTruthy();
  });
});
