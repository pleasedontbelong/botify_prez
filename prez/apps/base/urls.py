from django.conf.urls import patterns, url
from django.views.generic import TemplateView

urlpatterns = patterns(
    '',
    # unsubscribe complete
    url(r'$',
        TemplateView.as_view(template_name="index.jinja2"),
        name='index')
)
