diaAtual=16
mesAtual=9
anoAtual=2022

print("Digite o dia do seu nascimento:")
dia = input()
print("Digite o mes do seu nascimento:")
mes = input()
print("Digite o ano do seu nascimento:")
ano = input()

diffAno = anoAtual - ano
diffAnoAntes= diffAno-1
estacaoAtual = 'Inverno'

#função pra definir a estação - sequencia de if nas datas e dias

if ((mes == 12 & dia >20) or mes == 1 or mes == 2 or (mes== 3 & dia <21)):
    estacao='verão'
if ((mes == 3 & dia >20) or mes == 4 or mes == 5 or (mes== 6 & dia <21)):
    estacao='outono'
if ((mes == 6 & dia >20) or mes == 7 or mes == 8 or (mes== 9 & dia <21)):
    estacao='inverno'
if ((mes == 9 & dia >20) or mes == 10 or mes == 11 or (mes== 12 & dia <21)):
    estacao='primavera'

if(mes < mesAtual):
    print("Você tem " + diffAno + "anos, nasceu no" + estacao + ". Atualmente estamos no Inverno")
if(mes == mesAtual & diaAtual<dia):
    print("Você tem " + diffAno + "anos, nasceu no" + estacao + ". Atualmente estamos no Inverno")
else:
    print("Você tem " + diffAnoAntes + "anos, nasceu no" + estacao + ". Atualmente estamos no " + estacaoAtual)