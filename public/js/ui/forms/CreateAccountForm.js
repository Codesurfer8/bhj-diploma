
/**
 * Класс CreateAccountForm управляет формой
 * создания нового счёта
 * */
class CreateAccountForm extends AsyncForm {
  /**
   * Создаёт счёт с помощью Account.create и закрывает
   * окно в случае успеха, а также вызывает App.update()
   * и сбрасывает форму
   * */
  onSubmit(options) {
    Account.create(options, (err, response) => {
      if(response && response.success){
        const account = document.getElementById('new-account-form');
        App.getModal('newAccount').close();
        App.update();
        account.reset();
      } else {
        throw new Error(`Ошибка создания счета: ${response.error}`);
      }
    })


    // Account.create(options, (err, response) => {
    //   if (!response.success) {
    //     throw new Error(`Ошибка создания счета: ${response.error}`);
    //   }
    //   const account = document.getElementById('new-account-form');
    //   App.getModal('createAccount').close();
    //   App.update();
    //   account.reset();
    // });
  }
}