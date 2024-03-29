class ComponentGenerator < Rails::Generators::Base
  desc "This generator creates the view, CSS and JS files for a component"
  argument :component_name, required: true, desc: "Component name, e.g. auth-form"

  def create_view_file
    create_file "#{component_path}/_#{component_name}.html.erb"
  end

  def create_css_file
    create_file "#{component_path}/#{component_name}.css"
  end

  def create_js_file
    create_file "#{component_path}/#{component_name}.js" do
      # require component's CSS inside JS automatically
      "import \"./#{component_name}.css\";\n"
    end
  end

  protected

  def component_path
    "frontend/components/#{component_name}"
  end
end
