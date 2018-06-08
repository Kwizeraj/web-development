import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class LoginService {

  public constructor(private http: HttpClient) {}

  public authenticate(email: string, password: string): Observable<boolean> {

    const url = 'http://127.0.0.1:5000/login/' + email + '/' + password;
    return new Observable<boolean>(
      (observer) => {
        this.http.get(url).subscribe(
          (value) => {
            if (value['status'] === 0) {
              observer.next(true);
            } else {
              observer.next(false);
            }
          },
          (error) => {
            observer.error(error);
          }
        );
      }
    );
  }
}
