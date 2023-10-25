
package utn.dacs.ms.backend.model.entity;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import lombok.Data;

import java.util.List;

@Data
@Entity
public class Coach {

    @Id
    private String email;
    private String nombre;
    private String club;
    @OneToMany(mappedBy = "coach")
    private List<Equipo> equipos;

    public String getEmail() {
        return this.email;
    }
}
