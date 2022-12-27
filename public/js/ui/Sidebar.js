
/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    const buttonSidebar = document.querySelector(".sidebar-toggle");
    const iconSiderbarMini = document.querySelector(".sidebar-mini");

    buttonSidebar.addEventListener(
      'click',
      (ev) => {
        ev.preventDefault();
        iconSiderbarMini.classList.toggle('sidebar-open');
        iconSiderbarMini.classList.toggle('sidebar-collapse');
      }
    );

  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    const sideBarMenuItems = document.querySelectorAll('.menu-item');
    for (let i = 0; i < sideBarMenuItems.length; i++) {
      sideBarMenuItems[i].addEventListener(
        'click',
        (ev) => {
          ev.preventDefault();
          if (sideBarMenuItems[i].classList.contains('menu-item_register')) {
            App.getModal('register').open();
          } else if (sideBarMenuItems[i].classList.contains('menu-item_login')) {
            App.getModal('login').open();
          } else if (sideBarMenuItems[i].classList.contains('menu-item_logout')) {
            User.logout((err, response) => {
              if (response.succsess) {
                App.setState( 'init' );
              } else {
                console.error(`Error: ${err}`);
              }
            })
          }
        }
      );
    }

  }
}