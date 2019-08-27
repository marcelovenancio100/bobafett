package com.security.jwt.starter.resources.model.dto;

import java.util.Objects;

public class CustomerDto {
    private String codigo;
    private String nome;
    private String ni;
    private String sortDirection;
    private Integer pageIndex;
    private Integer pageSize;

    public CustomerDto() {}

    public CustomerDto(String codigo, String nome, String ni, String sortDirection, Integer pageIndex, Integer pageSize) {
        this.codigo = codigo;
        this.nome = nome;
        this.ni = ni;
        this.sortDirection = sortDirection;
        this.pageIndex = pageIndex;
        this.pageSize = pageSize;
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

    public String getNi() {
        return ni;
    }

    public void setNi(String ni) {
        this.ni = ni;
    }

    public String getSortDirection() {
        return sortDirection;
    }

    public void setSortDirection(String sortDirection) {
        this.sortDirection = sortDirection;
    }

    public Integer getPageIndex() {
        return pageIndex;
    }

    public void setPageIndex(Integer pageIndex) {
        this.pageIndex = pageIndex;
    }

    public Integer getPageSize() {
        return pageSize;
    }

    public void setPageSize(Integer pageSize) {
        this.pageSize = pageSize;
    }
}
