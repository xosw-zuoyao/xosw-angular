import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MemberService} from '../../services/member.service';
import {Member} from '../../classes/member';

@Component({
  selector: 'app-member-login',
  templateUrl: './member-login.component.html',
  styleUrls: ['./member-login.component.css']
})
export class MemberLoginComponent implements OnInit {

  memberFormModel;
  member;

  constructor(memberService: MemberService, formBuilder: FormBuilder) {
    this.memberFormModel = formBuilder.group({
      userName: [''],
      realName: [''],
      nickName: [''],
      mobile: [''],
      email: [''],
      checkTreaty: [1],
      passwordsGroup: formBuilder.group({
        password: [''],
        pconfirm: ['']
      })
    });
  }

  ngOnInit() {
  }

  onSubmit(customerData) {
    const member = this.prepareMember();
  }

  prepareMember(): Member {
    const formModel = this.memberFormModel.value;
    return {
      id: '',
      coded: '',
      userName: formModel.userName as string,
      password: formModel.password as string,
      mobile: '',
      nickName: '',
      email: '',
      realName: '',
      regIp: '',
      regTime: '',
      lastIp: '',
      lastTime: '',
      loginType: '',
      mobileVerify: '',
      emailVerify: '',
      phoneState: '',
      videoState: '',
      bankState: '',
      stateTime: '',
      state: '',
      headImg: '',
      birthday: '',
      sex: ''
    };
  }
}
