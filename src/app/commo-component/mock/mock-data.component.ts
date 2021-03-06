import { Component , OnInit} from '@angular/core';
import { MockService } from '../../commo-service/mock.service';

/**
 * MockComponent 这是一个组件  <app-mock>路由：http://localhost:4200/mock
 */
@Component({
  selector: 'app-mock',
  templateUrl: './mock-data.component.html',
  styleUrls: ['./mock-data.component.css'],
  providers: [MockService]                       // 注册服务提供商（必须）
})
export class MockComponent implements OnInit {
  test = 'Hello World';
  // 定义需要用到的变量，并将其类型设置为万能型any
  strData: any;
  jsonObj: any;
  header: any;
  style: any;
  datas: any;

  // 构造器--构造一个服务组件（必须）
  constructor(private mockService: MockService) {}

  /**
   * getJson 获取json Object对象
   * @param str 需要转换的json字符串
   */
  getJson(str: string) {
    return JSON.parse(this.strData);
  }

  // 初始化操作，所有的逻辑代码必须放置在方法体中
  ngOnInit() {
    this.strData = this.mockService.getJsonStr();
    this.jsonObj = this.getJson(this.strData);
    this.header = this.jsonObj.header;
    this.style = this.jsonObj.style;
    this.datas = this.jsonObj.data;
  }
}
