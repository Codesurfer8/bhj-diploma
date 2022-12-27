
/**
 * Класс CreateTransactionForm управляет формой
 * создания новой транзакции
 * */
`use strict`
class CreateTransactionForm extends AsyncForm {
  /**
   * Вызывает родительский конструктор и
   * метод renderAccountsList
   * */
  constructor(element) {
    super(element)
    this.renderAccountsList();
  }

  /**
   * Получает список счетов с помощью Account.list
   * Обновляет в форме всплывающего окна выпадающий список
   * */
  renderAccountsList() {
    const select = this.element.querySelector('.accounts-select');
    const user = User.current();
    if (user) {
      Account.list(user, (err, response) => {
        if (response && response.data) {
          const acccount = item => `<option value="${item.id}">${item.name}</option>`;
          select.innerHTML = response.data.reduce((acc, item) => acc + acccount(item), '');
        } else {
          throw new Error(err);
        }
      });
    }
  }

  /**
   * Создаёт новую транзакцию (доход или расход)
   * с помощью Transaction.create. По успешному результату
   * вызывает App.update(), сбрасывает форму и закрывает окно,
   * в котором находится форма
   * */
  onSubmit(data) {
    Transaction.create(data, (err, response) => {
      if (!response.success) {
        throw new Error(`Ошибка транзакции: ${response.error}`);
      }
      this.element.reset();
      App.getModal('newIncome').close();
      App.getModal('newExpense').close();
      App.update();
    });
    }
  }
