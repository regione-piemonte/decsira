<table class="featureInfo">
  <caption class="featureInfo">Piani d'area: vincoli</caption>
  <#list features as feature>
    <tr>
      <th>Vincolo</th>
	  <th>Tipo zona</th>
	  <th>Tipo piano</th>
	  <th>Nome area</th>
    </tr>
    <tr>
      <td>${feature.desc_vincolo.value}</td>
	  <td>${feature.desc_tipo_zona.value}</td>
	  <td>${feature.des_tipo_piano.value}</td>
	  <td>${feature.nome_area.value}</td>
    </tr>
  </#list>
</table>
