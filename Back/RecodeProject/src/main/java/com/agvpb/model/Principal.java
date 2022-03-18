package com.agvpb.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "passeios")
public class Principal {
	
	@Id
	private String id;
	
	private String passeioRegiao;
	
	private String passeioEstado;
	
	private String passeioDestino;
	
	private float passeioPreco;

	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getPasseioRegiao() {
		return passeioRegiao;
	}

	public void setPasseioRegiao(String passeioRegiao) {
		this.passeioRegiao = passeioRegiao;
	}

	public String getPasseioEstado() {
		return passeioEstado;
	}

	public void setPasseioEstado(String passeioEstado) {
		this.passeioEstado = passeioEstado;
	}

	public String getPasseioDestino() {
		return passeioDestino;
	}

	public void setPasseioDestino(String passeioDestino) {
		this.passeioDestino = passeioDestino;
	}

	public float getPasseioPreco() {
		return passeioPreco;
	}

	public void setPasseioPreco(float passeioPreco) {
		this.passeioPreco = passeioPreco;
	}
	
		

}
