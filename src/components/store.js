import {action} from 'mobx';
import firebase from 'firebase';
import MobxFirebaseStore from 'mobx-firebase-store';
import RNFetchBlob from 'react-native-fetch-blob';

const Blog = RNFetchBlob.polyfill.Blob;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;

const base = 'posts';

export default PostStore extends MobxFirebaseStore{
  constructor(){
    super(firebade.database().ref())
  }
  subs(){
    return[{
      subKey: base,
      asList:true,
      path:base
    }]
  }
  @action
  add(text,url){
    let posts = {
      description: text,
      store: text,
      size: text,
      designer: text,
      price: text,
      color: text,
      name: text,
      material: text,
      country: text,
      laundry: text,
      season : text,
      style: text,
      subStyle: text,
      friend: text
    }
    let key = this.fb.child(base).push().key

    let updates = {};
    udates['/' + base + '/' + key ] = posts;
    this.fb.update(updates);
  }
  @action
  postImage(img,cb){
    let uri = RNFetchBlob.wrap(img.path);
    Blog.build(uri, {type: img.type})
    .then((blob) => {
      this.storage.child(img.fileName).put(blob, {contentType: img.type})
      .then((snap) => {
        cb(snap)
        blob.close()
      })
    })
  }
}
