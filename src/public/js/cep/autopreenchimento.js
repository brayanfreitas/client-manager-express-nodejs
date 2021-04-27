
$(function() {  
    function limpar_form(){
        $("#")
    }
    $("#inputCep").blur(function() {      
        $.getJSON("https://viacep.com.br/ws/"+ $(this).val() +"/json/?callback=?", function(dados) {

            if (!("erro" in dados)) {
                $("#inputRua").val(dados.logradouro);
                $("#inputBairro").val(dados.bairro);
                $("#inputCidade").val(dados.localidade);
                $("#inputUf").val(dados.uf);
            }else {
                alert("CEP não encontrado.");
            }
        });
    });
});
/*
 $('#inputCep').on('focus', function() {   
        fetch('https://viacep.com.br/ws/'+ $(this).val() +'/json', {
            method: 'GET',
            mode: 'cors',
            
        })
            .then(response=> response.json())
            .then((data)=>{
                console.log(data);

            }).catch((error)=>{
                console.log(error);
            });
        if (!("erro" in dados)) {
            $("#inputRua").val(dados.logradouro);
            $("#inputBairro").val(dados.bairro);
            $("#inputCidade").val(dados.localidade);
            $("#inputUf").val(dados.uf);
        }else {
            alert("CEP não encontrado.");
        }
    });*/






/*$('#inputCep').focusout(function(){
    $.ajax({

        //passa a url onde será requisitado os dados de endereço
        url: 'https://viacep.com.br/ws/'+$(this).val()+'/json/?callback=?',
        //tipo de dado que será lido, no caso json
        dataType: 'json', 

        /*SUCCES será chamado caso consiga acessar os dados requisitados
          da fonte 
         
        succes: function(retorno){
            $('#inputRua').val(retorno.logadouro);
            $('#inputBairro').val(retorno.bairro);
            $('#inputRua').val(retorno.logadouro);
            $('#inputCidade').val(retorno.localidade);
            $('#inputUf').val(retorno.uf);

            $('inputComplemento').focus();
       }

    });

});*/