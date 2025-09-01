
  Platform.Load("Core", "1.1.1");
  try {
    var submitted = Request.Method == "POST";
    if (submitted) {
      // Campos del formulario de empresas actualizados
      var empresa = Request.GetFormField("empresa");
      var telefono = Request.GetFormField("telefono");
      var totalColaboradores = Request.GetFormField("total_colaboradores");
      var posicionCargo = Request.GetFormField("posicion_cargo");
      var estado = Request.GetFormField("estado");
      var posicionCargoOtro = Request.GetFormField("posicion_cargo_otro");
      var nombreEncargado = Request.GetFormField("nombre_encargado");
      var quienRefiere = Request.GetFormField("quien_refiere");
      var emailCorporativo = Request.GetFormField("email_corporativo");
      var captcha = Request.GetFormField("captcha");
      var acuerdo = Request.GetFormField("acuerdo");

      // Validar CAPTCHA
      if (captcha != "8") {
        Write("<p style='color:red; font-weight:bold;'>❌ Por favor, resuelve correctamente la operación matemática.</p>");
        return;
      }

      var insertDE = DataExtension.Init("Empresas_Interesadas_Form");
      insertDE.Rows.Add({
        "empresa": empresa,
        "telefono": telefono,
        "totalColaboradores": totalColaboradores,
        "posicionCargo": posicionCargo,
        "estado": estado,
        "posicionCargoOtro": posicionCargoOtro,
        "nombreEncargado": nombreEncargado,
        "quienRefiere": quienRefiere,
        "emailCorporativo": emailCorporativo,
        "acuerdo": acuerdo
      });

      Write("<p style='color:green; font-weight:bold;'>✅ ¡Gracias! Tu información ha sido enviada correctamente. Nos pondremos en contacto contigo pronto.</p>");
    }
  } catch(e) {
    Write("<p style='color:red; font-weight:bold;'>❌ Error al guardar en Data Extension: " + Stringify(e) + "</p>");
  }
