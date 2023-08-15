# all letters
for f in *.ts; do git mv $f $(echo $f | tr '[:upper:]' '[:lower:']); done 

# only first
for f in *.ts; do git mv $f "$(echo ${f:0:1} | tr '[:upper:]' '[:lower:]')${f:1}"; done
