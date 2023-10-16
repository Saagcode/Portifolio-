from colorama import Fore, Style
from time import sleep
from sys import exit
des1 = 'BANCO NACIONAL'
des2 = 'EMPRESTIMO NEGADO'
casa = float(input('Qual e o valor da casa ?\n R$'))
parc = int(input('Qual sera a quantidade de parcelas (Em meses) ?\n'))
tot = casa / parc
sal = float(input('Qual a renda individual ?\n R$'))
print('ANALISANDO PROPOSTA', end='')
print('.', end='')
sleep(1)
print('.', end='')
sleep(1)
print('.')
totsal = (30 * sal) / 100
to = (tot / sal) * 100
print('Valor da prestacao: R$ {:.2f}'.format(tot))
if totsal < tot:
    print(Fore.BLACK + Style.BRIGHT, '-_-'.center(3) * 15 + Style.RESET_ALL)
    print(Fore.RED + Style.BRIGHT, '{}'.format(des2). center(44))
    print(Fore.BLACK + Style.BRIGHT, '-_-'.center(3) * 15 + Style.RESET_ALL)
    print(Fore.RED + Style.BRIGHT, 'VALOR DA PARCELA EXCEDE 30% DO SALARIO DO CONTRATANTE' + Style.RESET_ALL)
    print(Fore.RED + Style.BRIGHT, 'A parcela de R$ {:.2f} sera referente a '
                                   '{:.2f}% do salario do contratante'.format(tot, to) + Style.RESET_ALL)
elif totsal >= tot:
    print(Fore.BLACK + Style.BRIGHT, '-_-'.center(3) * 15 + Style.RESET_ALL)
    print(Fore.GREEN + Style.BRIGHT, 'EMPRESTIMO APROVADO!'.center(44))
    print(Fore.BLACK + Style.BRIGHT, '-_-'.center(3) * 15 + Style.RESET_ALL)
    print('A parcela de R$ {:.2f} sera referente a {:.2f}% do salario do contratante'.format(tot, to) + Style.RESET_ALL)
aux = str(input('\naperte s para sair ou 0 para uma nova simulacao:\n'))
if aux == 's':
    print('OBRIGADO POR UTILIZAR O {}\n'.format(des1))
    print('Saindo', end='')
    print('.', end='')
    sleep(1)
    print('.', end='')
    sleep(1)
    print('.')
    exit()
while aux == '0':
    des1 = 'BANCO NACIONAL'
    des2 = 'EMPRESTIMO NEGADO'
    casa = float(input('Qual e o valor da casa ?\nR$ '))
    parc = int(input('Qual sera a quantidade de parcelas (Em meses) ?\n'))
    tot = casa / parc
    sal = float(input('Qual a renda individual ?\n'))
    print('ANALISANDO PROPOSTA', end='')
    sleep(1)
    print('.', end='')
    sleep(1)
    print('.', end='')
    sleep(1)
    print('.')
    sleep(1)
    totsal = (30 * sal) / 100
    to = (tot / sal) * 100
    if totsal < tot:
        print(Fore.BLACK + Style.BRIGHT, '-_-'.center(3) * 15 + Style.RESET_ALL)
        print(Fore.RED + Style.BRIGHT, '{}'.format(des2).center(44))
        print(Fore.BLACK + Style.BRIGHT, '-_-'.center(3) * 15 + Style.RESET_ALL)
        print(Fore.RED + Style.BRIGHT, 'VALOR DA PARCELA EXCEDE 30% DO SALARIO DO CONTRATANTE' + Style.RESET_ALL)
        print(Fore.RED + Style.BRIGHT,
              'A parcela de R$ {:.2f} sera referente a {:.2f}% do salario do '
              'contratante'.format(tot, to) + Style.RESET_ALL)
        aux = str(input('\naperte s para sair ou 0 para uma nova simulacao:\n'))
    elif totsal >= tot:
        print(Fore.BLACK + Style.BRIGHT, '-_-'.center(3) * 15 + Style.RESET_ALL)
        print(Fore.GREEN + Style.BRIGHT, 'EMPRESTIMO APROVADO!'.center(44))
        print(Fore.BLACK + Style.BRIGHT, '-_-'.center(3) * 15 + Style.RESET_ALL)
        print('A parcela de R$ {:.2f} sera referente a {:.2f}% do salario do '
              'contratante'.format(tot, to) + Style.RESET_ALL)
        aux = str(input('\naperte s para sair ou 0 para uma nova simulacao:\n'))
if aux == 's':
    print('OBRIGADO POR UTILIZAR O {}'.format(des1))
    print('Saindo', end='')
    print('.', end='')
    sleep(1)
    print('.', end='')
    sleep(1)
    print('.')
    exit()

pass
