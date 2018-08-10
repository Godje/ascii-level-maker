let SessionLoad = 1
if &cp | set nocp | endif
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd /media/daniel/therest/linux/github/ascii-level-maker
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +0 website-assets/js/model.js
badd +0 website-assets/js/index.js
badd +0 website-assets/js/modules/Settings.js
badd +0 website-assets/scss/settings.scss
badd +0 website-assets/scss/styles.scss
badd +1 website-assets/scss/vars.scss
argglobal
silent! argdel *
$argadd website-assets/js/model.js
set stal=2
edit website-assets/js/modules/Settings.js
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
wincmd _ | wincmd |
split
1wincmd k
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winminheight=1 winheight=1 winminwidth=1 winwidth=1
exe 'vert 1resize ' . ((&columns * 115 + 115) / 230)
exe '2resize ' . ((&lines * 28 + 30) / 60)
exe 'vert 2resize ' . ((&columns * 114 + 115) / 230)
exe '3resize ' . ((&lines * 28 + 30) / 60)
exe 'vert 3resize ' . ((&columns * 114 + 115) / 230)
argglobal
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=20
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 4 - ((3 * winheight(0) + 28) / 57)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
4
normal! 0
wincmd w
argglobal
if bufexists('website-assets/js/model.js') | buffer website-assets/js/model.js | else | edit website-assets/js/model.js | endif
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=20
setlocal fml=1
setlocal fdn=20
setlocal fen
4
normal! zo
let s:l = 5 - ((2 * winheight(0) + 14) / 28)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
5
normal! 0
wincmd w
argglobal
if bufexists('website-assets/js/index.js') | buffer website-assets/js/index.js | else | edit website-assets/js/index.js | endif
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=20
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 1 - ((0 * winheight(0) + 14) / 28)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
1
normal! 0
wincmd w
exe 'vert 1resize ' . ((&columns * 115 + 115) / 230)
exe '2resize ' . ((&lines * 28 + 30) / 60)
exe 'vert 2resize ' . ((&columns * 114 + 115) / 230)
exe '3resize ' . ((&lines * 28 + 30) / 60)
exe 'vert 3resize ' . ((&columns * 114 + 115) / 230)
tabedit website-assets/scss/vars.scss
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd _ | wincmd |
split
1wincmd k
wincmd w
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winminheight=1 winheight=1 winminwidth=1 winwidth=1
exe '1resize ' . ((&lines * 28 + 30) / 60)
exe 'vert 1resize ' . ((&columns * 115 + 115) / 230)
exe '2resize ' . ((&lines * 28 + 30) / 60)
exe 'vert 2resize ' . ((&columns * 115 + 115) / 230)
exe 'vert 3resize ' . ((&columns * 114 + 115) / 230)
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=20
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 1 - ((0 * winheight(0) + 14) / 28)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
1
normal! 0
wincmd w
argglobal
if bufexists('website-assets/scss/settings.scss') | buffer website-assets/scss/settings.scss | else | edit website-assets/scss/settings.scss | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=20
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 1 - ((0 * winheight(0) + 14) / 28)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
1
normal! 0
wincmd w
argglobal
if bufexists('website-assets/scss/styles.scss') | buffer website-assets/scss/styles.scss | else | edit website-assets/scss/styles.scss | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=20
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 6 - ((5 * winheight(0) + 28) / 57)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
6
normal! 0
wincmd w
exe '1resize ' . ((&lines * 28 + 30) / 60)
exe 'vert 1resize ' . ((&columns * 115 + 115) / 230)
exe '2resize ' . ((&lines * 28 + 30) / 60)
exe 'vert 2resize ' . ((&columns * 115 + 115) / 230)
exe 'vert 3resize ' . ((&columns * 114 + 115) / 230)
tabnext 1
set stal=1
if exists('s:wipebuf')
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 shortmess=filnxtToOc
set winminheight=1 winminwidth=1
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
