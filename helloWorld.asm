; -------------------------
; Hello World em assembly :P
; Tutorial hello wolrd assembly: https://www.youtube.com/watch?v=cnBP3G29KM8
; -------------------------

section .data:
	msg db 'Hello, world!', 0xa
	len equ $ - msg

section .text:

global _start

_start:
	mov edx, len
	mov ecx, msg
	mov ebx, 1
	mov eax, 4
	int 0x80
; saida
	mov eax, 1
	mov ebx, 0
	int 0x80