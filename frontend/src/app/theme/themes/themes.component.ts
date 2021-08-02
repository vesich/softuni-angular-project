import { Component } from '@angular/core';
import { ContentService } from 'src/app/content.service';
import { ICar, ICar2, IPost, ITheme } from 'src/app/shared/interfaces';
import { UserService } from 'src/app/user/user.service';


@Component({
  selector: 'app-theme',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent {

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  themes: ITheme[] | undefined;
  recentPosts: IPost[] | undefined;
  carPosts : ICar2[] | undefined;

  constructor(
    private contentService: ContentService,
    private userService: UserService
  ) {
    this.fetchThemes();
    this.fetchRecentPosts();
    this.fetchCars();
  }

  fetchCars(): void {
    this.carPosts = undefined;
    this.contentService.loadContent().subscribe(cars => this.carPosts = cars);
  }

  fetchThemes(): void {
    this.themes = undefined;
    this.contentService.loadThemes().subscribe(themes => this.themes = themes);
  }

  fetchRecentPosts(): void {
    this.recentPosts = undefined;
    this.contentService.loadPosts(5).subscribe(posts => this.recentPosts = posts);
  }
}
