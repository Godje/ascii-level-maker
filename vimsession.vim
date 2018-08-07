let SessionLoad = 1
if &cp | set nocp | endif
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd /mnt/c/Users/Owner/Google\ Drive/PROJECTS/github/ascii-level-maker
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +1 index.html
badd +2 ./website-assets/js/index.js
badd +20 website-assets/scss/styles.scss
badd +35 gulpfile.js
badd +19 website-assets/js/modules/App.js
badd +13 website-assets/js/model.js
badd +3 website-assets/js/modules/Canvas.js
badd +0 website-assets/scss/settings.scss
badd +0 website-assets/scss/vars.scss
argglobal
silent! argdel *
$argadd index.html
set stal=2
tabnew
tabnext -1
edit website-assets/js/modules/App.js
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 138 + 119) / 238)
exe 'vert 2resize ' . ((&columns * 99 + 119) / 238)
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
let s:l = 8 - ((7 * winheight(0) + 29) / 58)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
8
normal! 011|
wincmd w
argglobal
if bufexists('./website-assets/js/index.js') | buffer ./website-assets/js/index.js | else | edit ./website-assets/js/index.js | endif
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=20
setlocal fml=1
setlocal fdn=20
setlocal fen
8
normal! zo
let s:l = 1 - ((0 * winheight(0) + 29) / 58)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
1
normal! 0
wincmd w
exe 'vert 1resize ' . ((&columns * 138 + 119) / 238)
exe 'vert 2resize ' . ((&columns * 99 + 119) / 238)
tabnext
edit website-assets/scss/vars.scss
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
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe '1resize ' . ((&lines * 19 + 30) / 61)
exe 'vert 1resize ' . ((&columns * 119 + 119) / 238)
exe '2resize ' . ((&lines * 38 + 30) / 61)
exe 'vert 2resize ' . ((&columns * 119 + 119) / 238)
exe 'vert 3resize ' . ((&columns * 118 + 119) / 238)
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
let s:l = 3 - ((2 * winheight(0) + 9) / 19)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
3
normal! 021|
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
let s:l = 12 - ((11 * winheight(0) + 19) / 38)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
12
normal! 016|
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
let s:l = 16 - ((15 * winheight(0) + 29) / 58)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
16
normal! 034|
wincmd w
exe '1resize ' . ((&lines * 19 + 30) / 61)
exe 'vert 1resize ' . ((&columns * 119 + 119) / 238)
exe '2resize ' . ((&lines * 38 + 30) / 61)
exe 'vert 2resize ' . ((&columns * 119 + 119) / 238)
exe 'vert 3resize ' . ((&columns * 118 + 119) / 238)
tabnext 1
set stal=1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0
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
