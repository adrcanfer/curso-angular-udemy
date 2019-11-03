import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { FileItem } from '../models/file-item';
@Injectable({
  providedIn: 'root'
})
export class CargaImagenesService {

  private CARPETA_IMAGENES = 'img'

  constructor(private db: AngularFirestore) { }

  cargarImagenesFirebase(imagenes: FileItem[]) {
    const storageRef = firebase.storage().ref();

    for (const item of imagenes) {
      item.estaSubiedo = true;
      if (item.progreso >= 100) {
        continue;
      }
      const uploadTask: firebase.storage.UploadTask = storageRef.child(`${this.CARPETA_IMAGENES}/${item.nombreArchivo}`).put(item.archivo);

      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => item.progreso = (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        (error) => console.error('Error al subir', error),
        () => {
          console.log('Imagen cargada correctamente');
          console.log(uploadTask)
          item.url = `https://firebasestorage.googleapis.com/v0/b/fir-photos-60e31.appspot.com/o/img%2F${uploadTask.snapshot.metadata.name}?alt=media&token=4905d876-3afe-4fdf-90ab-8fbbd7c368fa`;
          item.estaSubiedo = false;
          debugger;
          this.guardarImagen(
            {
              nombre: item.nombreArchivo,
              url: item.url
            }
          )
        }
      )
    }
  }

  private guardarImagen(imagen: { nombre: string, url: string }) {
    this.db.collection(`/${this.CARPETA_IMAGENES}`).add(imagen);
  }


}
