import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Comment } from '../../shared/comment';

/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {

  comment: FormGroup;
  comm: Comment;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public viewCtrl: ViewController,
  private formBuilder: FormBuilder) {
    this.comment = this.formBuilder.group({
      author: ['', Validators.required],
      rating: [5, Validators.required],
      comment: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSubmit() {
    console.log(this.comment);
    this.comm = this.comment.value;
    this.comm.date = new Date().toISOString();
    this.viewCtrl.dismiss(this.comm);
  }
}
