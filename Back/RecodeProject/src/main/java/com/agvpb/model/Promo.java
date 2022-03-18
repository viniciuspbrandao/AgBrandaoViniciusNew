package com.agvpb.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "promo")
public class Promo {
	
	@Id
	private String id;
	
	private String promoRegiao;
	
	private String promoEstado;
	
	private String promoDestino;
	
	private float promoPreco;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getPromoRegiao() {
		return promoRegiao;
	}

	public void setPromoRegiao(String promoRegiao) {
		this.promoRegiao = promoRegiao;
	}

	public String getPromoEstado() {
		return promoEstado;
	}

	public void setPromoEstado(String promoEstado) {
		this.promoEstado = promoEstado;
	}

	public String getPromoDestino() {
		return promoDestino;
	}

	public void setPromoDestino(String promoDestino) {
		this.promoDestino = promoDestino;
	}

	public float getPromoPreco() {
		return promoPreco;
	}

	public void setPromoPreco(float promoPreco) {
		this.promoPreco = promoPreco;
	}

	
	

}
