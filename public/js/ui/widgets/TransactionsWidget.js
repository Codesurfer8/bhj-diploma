/**
 * Класс TransactionsWidget отвечает за
 * открытие всплывающих окон для
 * создания нового дохода или расхода
 * */
`use strict`
class TransactionsWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor(element) {
    if (!element) {
      throw new Error('Ошибка, элемент не найден !')
    }

    this.element = element;
    this.registerEvents();
  }
  /**
   * Регистрирует обработчики нажатия на
   * кнопки «Новый доход» и «Новый расход».
   * При нажатии вызывает Modal.open() для
   * экземпляра окна
   * */
  registerEvents() {
    const incomeBtn = document.querySelector('.create-income-button');
    const expenseBtn = document.querySelector('.create-expense-button');

    incomeBtn.addEventListener(
      'click',
      (e) => {
        e.preventDefault();
        App.getModal('newIncome').open()
      }
    );

    expenseBtn.addEventListener(
      'click',
      (e) => {
        e.preventDefault();
       App.getModal('newExpense').open();
      }
    );

  }
}

