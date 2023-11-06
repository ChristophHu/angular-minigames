import { Component, Output, TemplateRef, ViewChild, EventEmitter } from "@angular/core";
import { DropdownPanel } from "./dropdown-panel";

@Component({
  selector: "my-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.css"]
})
export class DropdownComponent implements DropdownPanel {
  @ViewChild(TemplateRef) templateRef!: TemplateRef<any>;
  @Output() closed = new EventEmitter<void>();

  constructor() {}
}
