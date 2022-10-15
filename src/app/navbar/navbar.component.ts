import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	constructor(public TRANS_SERVICE: TranslocoService) { }

	is_mobile_menu_active = false;

	current_languge = 'en';


	ngOnInit(): void {

		// Get all "navbar-burger" elements
		const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

		// Add a click event on each of them
		$navbarBurgers.forEach(el => {

			el.addEventListener('click', () => {

				// Get the target from the "data-target" attribute
				const target = el.dataset.target;
				const $target = document.getElementById(target);

				// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
				el.classList.toggle('is-active');
				$target?.classList.toggle('is-active');

			});
		});

	}


	toggleMenuStyle(): void {

		this.is_mobile_menu_active = !this.is_mobile_menu_active;


		if (this.is_mobile_menu_active) {
			//toggle background color for mobile only
			const menu = document.getElementById('navbarBasicExample') as HTMLDivElement | null;

			if (menu) {
				menu.style.background = 'rgb(248, 245, 239)';
			}


			//toggle font color
			const navbar_items = document.getElementsByClassName(
				'navbar-item-font',
			) as HTMLCollectionOf<HTMLElement>;

			// 👇️ convert to array
			const arr = Array.from(navbar_items);

			// 👇️ access array-specific methods
			arr.forEach(navbar_item => {

				navbar_item.style.color = "rgb(53, 51, 49)";

			});


		}
		else{
			//toggle background color for mobile only
			const menu = document.getElementById('navbarBasicExample') as HTMLDivElement | null;

			if (menu) {
				menu.style.background = 'transparent';
			}


			//toggle font color
			const navbar_items = document.getElementsByClassName(
				'navbar-item-font',
			) as HTMLCollectionOf<HTMLElement>;

			// 👇️ convert to array
			const arr = Array.from(navbar_items);

			// 👇️ access array-specific methods
			arr.forEach(navbar_item => {

				navbar_item.style.color = "rgb(248, 245, 239)";

			});

		}


	}

	changeLanguage(e: Event){

		let link = e.target as HTMLLinkElement;
		this.TRANS_SERVICE.setActiveLang(link.innerText);
		
	}


}
