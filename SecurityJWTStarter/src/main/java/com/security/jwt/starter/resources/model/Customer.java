package com.security.jwt.starter.resources.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigDecimal;
import java.time.LocalDate;

@Document(collection = "customer")
public class Customer {
    public static final int CNPJ = 0;
    public static final int CPF = 1;

    @Id
    private String id;
    private String codigo;
    private String nome;
    private Integer ti;
    private String ni;
    private String email;
    private String fone;
    private String endereco;
    private Integer numero;
    private String bairro;
    private String municipio;
    private String uf;
    private LocalDate datacad;
    private BigDecimal score;

    public Customer() {}

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Integer getTi() {
        return ti;
    }

    public void setTi(Integer ti) {
        this.ti = ti;
    }

    public String getNi() {
        return ni;
    }

    public void setNi(String ni) {
        this.ni = ni;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFone() {
        return fone;
    }

    public void setFone(String fone) {
        this.fone = fone;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public Integer getNumero() {
        return numero;
    }

    public void setNumero(Integer numero) {
        this.numero = numero;
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public String getMunicipio() {
        return municipio;
    }

    public void setMunicipio(String municipio) {
        this.municipio = municipio;
    }

    public String getUf() {
        return uf;
    }

    public void setUf(String uf) {
        this.uf = uf;
    }

    public LocalDate getDatacad() {
        return datacad;
    }

    public void setDatacad(LocalDate datacad) {
        this.datacad = datacad;
    }

    public BigDecimal getScore() {
        return score;
    }

    public void setScore(BigDecimal score) {
        this.score = score;
    }

    public static int getCNPJ() {
        return CNPJ;
    }

    public static int getCPF() {
        return CPF;
    }
}
