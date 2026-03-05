import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-navbar',
    imports: [NgIf],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    activeLang: 'en' | 'de' = 'en';

    setLang(lang: 'en' | 'de') {
        this.activeLang = lang;
    }

    toggleLang() {
        this.activeLang = this.activeLang === 'en' ? 'de' : 'en';
    }
}
