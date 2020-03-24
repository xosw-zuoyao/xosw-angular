import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  // 当前页
  pageNum: number;
  // 每页的数量
  pageSize: number;
  // 当前页的数量
  size: number;
  // 当前页面第一个元素在数据库中的行号
  startRow: number;
  // 当前页面最后一个元素在数据库中的行号
  endRow: number;
  // 总页数
  pages: number;
  // 前一页
  prePage: number;
  // 下一页
  nextPage: number;
  // 导航页码数
  navigatePages: number;
  // 所有导航页号
  navigatepageNums: number[];
  // 导航条上的第一页
  navigateFirstPage: number;
  // 导航条上的最后一页
  navigateLastPage: number;
  // 是否为第一页
  isFirstPage: boolean;
  // 是否为最后一页
  isLastPage: boolean;
  // 是否有前一页
  hasPreviousPage: boolean;
  // 是否有下一页
  hasNextPage: boolean;

  constructor() {
  }

  ngOnInit() {
  }


  // 前往首页
  goFirstPage() {

  }

  // 前往尾页
  goLastPage() {

  }

}
