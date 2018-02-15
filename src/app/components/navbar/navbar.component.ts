import { Component, OnInit, TemplateRef  } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

   modalRef: BsModalRef;
   config = {

backdrop: false,
ignoreBackdropClick: false
};
   userName:any;
  constructor(private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-md'});
    // this.modalRef = this.modalService.show(template, this.config);
}
close(template: TemplateRef<any>){
document.body.classList.remove('modal-open');
    const modalContainer = document.querySelector('modal-container');
    if (modalContainer !== null) {
  modalContainer.parentNode.removeChild(modalContainer);
}
    
  }
  
  ngOnInit() {
  }

}
