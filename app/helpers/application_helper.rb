module ApplicationHelper
  # Our helper will also handle a case when we happen to have two partials
  # in the same folder with a slightly different functionality
  # (e.g. _message-form.html.erb and _message-form_admin.html.erb).
  # As a convention, we will use underscores to tell these “alternative”
  # partials from each other.
  def component(component_name, locals = {}, &block)
    name = component_name.split("_").first
    render("components/#{name}/#{component_name}", locals, &block)
  end

  alias c component
end
