import { Component } from '@angular/core';
import { AboutComponent } from './sections/about/about.component';
import { ContactComponent } from './sections/contact/contact.component';
import { HeroComponent } from './sections/hero/hero.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { TestimonialsComponent } from './sections/testimonials/testimonials.component';

@Component({
    selector: 'app-home',
    imports: [AboutComponent, ContactComponent, HeroComponent, ProjectsComponent, SkillsComponent, TestimonialsComponent],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
