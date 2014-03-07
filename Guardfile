guard 'livereload' do
  watch(%r{prez/apps/base/static/.+\.(css|js|hbs)$})
  watch(%r{prez/apps/.+\.(jinja2)$})
end

guard 'compass' do
  watch(%r{prez/apps/base/static/.+\.(sass|scss)$})
end

guard 'shell' do
  watch(%r{test/less/.+\.less}) { `make -C test/ bootstrap-css` }
  watch(%r{icons/.+}) { `glue icons/ --css=/sprite --img=images/` }
end
