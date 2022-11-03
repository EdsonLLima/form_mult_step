//Escode todos os passos e exibe o primeiro a carregar a página

$(document).ready(function () {
  $(".step").hide();
  $(".step").first().show();

  //exibe no topo qual passo estamos pela ordem da div que esta visivel
  const showSteps = (countIndex) => {
    const index = parseInt($(".step:visible").index());
    if (index == 0) {
      //Se for o primeiro passo desabilita o botao de voltar e esconde o botao
      $("#prev").prop("disabled", true).hide();
    } else if (index == parseInt($(".step").length) - 1) {
      //Se for o ultimo passo desabilita o botão de avançar e esconde o botao
      $("#next").prop("disabled", true).hide();
    } else {
      //Em outras situações os dois serão habilitados e exibe o botão
      $("#next").prop("disabled", false).show();
      $("#prev").prop("disabled", false).show();
    }
    $("#stepNumber").html(index + 1);
  };

  const errorSteps1 = () => {
    // remove as mensagens de erro
    $(".erromsg").remove();

    // verificar se os campos foram preenchidos
    var nome = $("#inputNome");
    var email = $("#inputEmail");

    // Mensagem de erro padrão a ser inserida após o campo
    var erromsg = '<div class="erromsg">Preencha o campo <span></span></div>';

    if (!nome.val() || nome.val().length < 5) {
      nome.after(erromsg);
      $(".erromsg span").text("nome corretamente");
      return;
    }

    if (!email.val()) {
      email.after(erromsg);
      $(".erromsg span").text("email");
      return;
    }

    $(".step:visible").hide().next().show();
  };
  const errorSteps2 = () => {
    // remove as mensagens de erro
    $(".erromsg").remove();

    // verificar se os campos foram preenchidos
    var endereco = $("#InputEndereco");
    var fone = $("#InputFone");

    // Mensagem de erro padrão a ser inserida após o campo
    var erromsg = '<div class="erromsg">Preencha o campo <span></span></div>';

    if (!endereco.val()) {
      endereco.after(erromsg);
      $(".erromsg span").text("endereço");
      return;
    }
    if (!fone.val()) {
      fone.after(erromsg);
      $(".erromsg span").text("Telefone");
      return;
    }

    $(".step:visible").hide().next().show();
  };

  const errorSteps3 = () => {
    // remove as mensagens de erro
    $(".erromsg").remove();

    // verificar se os campos foram preenchidos
    var cep = $("#InputCep");
    var bairro = $("#inputBairro");

    // Mensagem de erro padrão a ser inserida após o campo
    var erromsg = '<div class="erromsg">Preencha o campo <span></span></div>';

    if (!cep.val()) {
      cep.after(erromsg);
      $(".erromsg span").text("cep");
      return;
    }
    if (!bairro.val()) {
      bairro.after(erromsg);
      $(".erromsg span").text("Bairro");
      return;
    }

    $(".step:visible").hide().next().show();
  };

  const errorSteps4 = () => {
    // remove as mensagens de erro
    $(".erromsg").remove();

    // verificar se os campos foram preenchidos
    var visitante = $("#InputVisitante");
    var general = $("#inputGeneral");

    // Mensagem de erro padrão a ser inserida após o campo
    var erromsg = '<div class="erromsg">Preencha o campo <span></span></div>';

    if (!visitante.val()) {
      visitante.after(erromsg);
      $(".erromsg span").text("visitante");
      return;
    }
    if (!general.val()) {
      general.after(erromsg);
      $(".erromsg span").text("General");
      return;
    }

    $(".step:visible").hide().next().show();
  };

  //Executar a função ao carregar a página
  showSteps();

  //avançar para o próximo passo
  $("#next").click(() => {
    const index = parseInt($(".step:visible").index());
    if (index == 0) {
      errorSteps1();
    } else if (index == 1) {
      errorSteps2();
    } else {
      errorSteps3();
    }

    showSteps();
  });

  //retorna o passo anterior
  $("#prev").click(() => {
    $(".step:visible").hide().prev().show();
    showSteps();
  });
});
