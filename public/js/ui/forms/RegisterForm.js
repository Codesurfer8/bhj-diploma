
/**
 * Класс RegisterForm управляет формой
 * регистрации
 * */
class RegisterForm extends AsyncForm {
  /**
   * Производит регистрацию с помощью User.register
   * После успешной регистрации устанавливает
   * состояние App.setState( 'user-logged' )
   * и закрывает окно, в котором находится форма
   * */
  onSubmit(options) {
    User.register(options, (err, response) => {
      if (response.success) {
        App.setState( 'user-logged' );
        this.element.reset();
        App.getModal('register').close();
      } else {
        throw new Error(`Ошибка регистрации: ${response.error}`)      }
    });
  }
}

