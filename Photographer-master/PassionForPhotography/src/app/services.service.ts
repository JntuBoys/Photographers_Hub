import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { FormGroup } from '@angular/forms'

@Injectable({
    providedIn: 'root',
})
export class ServicesService {
    constructor(private http: HttpClient) {}

    register(Registerform: any): Observable<any> {
        return this.http.post('http://localhost:3001/register', Registerform)
    }
    reserv(form1: any): Observable<any> {
        return this.http.post('common/reserv', form1)
    }
    login(Signinform: any): Observable<any> {
        console.log('Signinform', Signinform)
        return this.http.post('/api/photographer/login', Signinform, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }),
            withCredentials: true,
        })
    }
    profiles(): Observable<any> {
        return this.http.get('/api/common/getallprofiles', {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }),
            withCredentials: true,
        })
    }
    payment(username: any, date: any): Observable<any> {
        return this.http.get(
            'http://localhost:3001/payment/' + username + '/' + date,
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                }),
                withCredentials: true,
            }
        )
    }
    pgdetails(username: any): Observable<any> {
        console.log(username)
        return this.http.get('http://localhost:3001/pgdetails/' + username, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }),
            withCredentials: true,
        })
    }

    edit(username: any) {
        return this.http.get('api/common/editprofile/' + username, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }),
            withCredentials: true,
        })
    }

    view(username: any) {
        console.log(username)
        return this.http.get('common/ViewProfile/' + username, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }),
            withCredentials: true,
        })
    }
    photos(username: any) {
        console.log(username)
        return this.http.get('http://localhost:3001/photos/' + username, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }),
            withCredentials: true,
        })
    }
    mybookings(username1: any) {
        return this.http.get('api/common/Reserved/' + username1, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }),
            withCredentials: true,
        })
    }
    logout() {
        return this.http.get('http://localhost:3001/logout', {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }),
            withCredentials: true,
        })
    }
}
