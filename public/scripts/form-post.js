
  Platform.Load("Core", "1.1.1");
  try {
    var submitted = Request.Method == "POST";
    if (submitted) {
      // Campos del formulario de empresas
      var nombreCompleto = Request.GetFormField("nombre_completo");
      var empresa = Request.GetFormField("empresa");
      var emailCorporativo = Request.GetFormField("email_corporativo");
      var telefono = Request.GetFormField("telefono");
      var rolActual = Request.GetFormField("rol_actual");
      var totalColaboradores = Request.GetFormField("total_colaboradores");
      var codigoPostal = Request.GetFormField("codigo_postal");
      var presupuestoAsignado = Request.GetFormField("presupuesto_asignado");
      var tiempoImplementacion = Request.GetFormField("tiempo_implementacion");
      var estado = Request.GetFormField("estado");
      var acuerdo = Request.GetFormField("acuerdo");

      var insertDE = DataExtension.Init("Empresas_Interesadas_Form");
      insertDE.Rows.Add({
        "nombreCompleto": nombreCompleto,
        "empresa": empresa,
        "emailCorporativo": emailCorporativo,
        "telefono": telefono,
        "rolActual": rolActual,
        "totalColaboradores": totalColaboradores,
        "codigoPostal": codigoPostal,
        "presupuestoAsignado": presupuestoAsignado,
        "tiempoImplementacion": tiempoImplementacion,
        "estado": estado,
        "acuerdo": acuerdo
      });

      Write("<p style='color:green; font-weight:bold;'>✅ ¡Gracias! Tu información ha sido enviada correctamente. Nos pondremos en contacto contigo pronto.</p>");
    }
  } catch(e) {
    Write("<p style='color:red; font-weight:bold;'>❌ Error al guardar en Data Extension: " + Stringify(e) + "</p>");
  }
